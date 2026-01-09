import { db } from "@/server/db";
import { cache } from "react";
import "server-only";

export const preload = () => {
  void db.user.findFirst();
};

export const getUser = cache(async () => {
  return db.user.findFirst();
});
