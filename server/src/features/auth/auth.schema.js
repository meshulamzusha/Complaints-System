import { z } from "zod";

const AdminLoginSchema = z.object({
  password: z.string().length(10)
});

export default AdminLoginSchema;
