import { http } from "../../../lib/http";
import { UserSchema } from "../_types";
import type { UserType, RegisterReq, UserErrorType } from "../_types";

export function register(req: RegisterReq): Promise<UserType | UserErrorType | undefined> {
  return http.post({
    url: "/users",
    body: {
      user: req,
    },
    schema: UserSchema,
  });
}
