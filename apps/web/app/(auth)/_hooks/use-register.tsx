import { useMutation } from "@tanstack/react-query";
import type { RegisterReq } from "../_types";
import { register } from "../_api";

export function useRegister() {
  return useMutation({
    mutationFn: (req: RegisterReq) => register(req),
  });
}
