import { z } from "zod";

const complaintSchema = z.object({
  category: z.enum(["מזון", "ציוד", "פקודות", "אחר"], {
    message:
      'Invalid option: expected one of Food | Equipment | Commands | Other',
  }),
  content: z.string(),
});

export default complaintSchema;
