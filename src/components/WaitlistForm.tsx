"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { waitlistSchema, WaitlistFormData } from "@/lib/zodSchemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function WaitlistForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setLoading(true);
    const res = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    setLoading(false);

    if (res.ok) {
      setSuccessMessage("🎉 You’ve been added to the waitlist.");
      toast.success("You’re on the PitchMint waitlist 🎉", {
        description: "We’ll notify you as soon as we launch.",
        duration: 4000,
      });
      onSuccess();
    } else {
      toast.error("Something went wrong 😞", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl">
      <CardContent className="p-6 space-y-5">
        <h2 className="text-2xl font-bold text-center text-green-600">
          Join the PitchMint Waitlist
        </h2>

        {successMessage && (
          <div className="bg-green-100 text-green-800 px-4 py-2 mb-2 rounded-md text-sm text-center font-medium">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input {...register("name")} placeholder="Your name" />

          <div>
            <Input
              type="email"
              {...register("email")}
              placeholder="Your email"
              required
            />
            {errors.email && (
              <p className="text-sm text-red-600 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <Input
            {...register("twitter")}
            placeholder="@yourtwitter (optional)"
          />

          <Button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Join Now"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
