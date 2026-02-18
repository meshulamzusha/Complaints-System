import { z } from "zod";

const complaintSchema = z.object({
  category: z.enum(["Food", "Equipment", "Commands", "Other"], {
    message:
      'Invalid option: expected one of Food | Equipment | Commands | Other',
  }),
  content: z.string(),
});

export default complaintSchema;
