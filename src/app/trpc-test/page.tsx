"use client";

import { api } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function TrpcTestPage() {
  const [text, setText] = useState("World");
  const { data, isLoading } = api.example.hello.useQuery({ text });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>tRPC Test</CardTitle>
          <CardDescription>Test your tRPC setup</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Input text</label>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
            />
          </div>
          <div className="rounded-lg border p-4">
            {isLoading ? (
              <p className="text-muted-foreground">Loading...</p>
            ) : (
              <p className="text-lg font-semibold">{data?.greeting}</p>
            )}
          </div>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            className="w-full"
          >
            Test Connection
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
