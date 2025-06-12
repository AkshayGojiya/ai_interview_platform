"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import InterviewField from "./InterviewField";
import { getCurrentUser } from "@/lib/actions/auth.action";

const interviewSchema = z.object({
  interviewType: z.enum(["technical", "behavioral", "mixed"]),
  role: z.string().min(2, "Role is required"),
  level: z.enum(["entry", "mid", "senior"]),
  techStack: z.string().min(2, "Tech stack is required"),
  numberOfQuestions: z.coerce.number().min(1, "Must be at least 1"),
});

const InterviewForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof interviewSchema>>({
    resolver: zodResolver(interviewSchema),
    defaultValues: {
      interviewType: "technical",
      role: "",
      level: "entry",
      techStack: "",
      numberOfQuestions: 5,
    },
  });

  const onSubmit = async (values: z.infer<typeof interviewSchema>) => {
    const user = await getCurrentUser();
    try {
        const payload = {
            type: values.interviewType,
            role: values.role,
            level: values.level,
            techstack: values.techStack,
            amount: values.numberOfQuestions,
            userid: user?.id,
        };
        const res = await fetch("/api/vapi/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        const result = await res.json();
        if (result.success) {
            toast.success("Interview created successfully!");
            router.push("/");
          } else {
            toast.error("Something went wrong while generating interview.");
          }
    } catch (error) {
      console.error(error);
      toast.error("Error generating interview");
    }
  };

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-10 px-10">
        <h2 className="text-center text-xl font-bold text-primary-100">
          Generate Custom Interview
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
            <InterviewField
              control={form.control}
              name="interviewType"
              label="Interview Type"
              type="select"
              options={[
                { label: "Technical", value: "technical" },
                { label: "Behavioral", value: "behavioral" },
                { label: "Mixed", value: "mixed" },
              ]}
            />

            <InterviewField
              control={form.control}
              name="role"
              label="Role"
              placeholder="e.g., Backend Engineer"
            />

            <InterviewField
              control={form.control}
              name="level"
              label="Level"
              type="select"
              options={[
                { label: "Entry", value: "entry" },
                { label: "Mid", value: "mid" },
                { label: "Senior", value: "senior" },
              ]}
            />

            <InterviewField
              control={form.control}
              name="techStack"
              label="Tech Stack"
              placeholder="Comma-separated: e.g., React, Node.js, SQL"
            />

            <InterviewField
              control={form.control}
              name="numberOfQuestions"
              label="Number of Questions"
              type="number"
              placeholder="e.g., 5"
            />

            <Button type="submit" className="btn w-full mt-4">
              Generate Interview
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default InterviewForm;
