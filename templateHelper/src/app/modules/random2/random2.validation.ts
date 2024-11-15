import { z } from 'zod';
      
const createRandom2ZodSchema = z.object({
  body: z.object({
    field1: z.string({ required_error:"field1 is required", invalid_type_error:"field1 should be type string" }),
      field2: z.array(z.string({ required_error:"field2 is required", invalid_type_error:"field2 array item should have type string" })),
      field3: z.string({ required_error:"field3 is required", invalid_type_error:"field3 should be type objectID or string" }),
      field4: z.date({ required_error:"field4 is required", invalid_type_error:"field4 should be type date" }),
      field5: z.array(z.string({ required_error:"field5 is required", invalid_type_error:"field5 array item should have type string" })),
      field6: z.array(z.number({ required_error:"field6 is required", invalid_type_error:"field6 array item should have type number" })),
      field7: z.array(z.date({ required_error:"field7 is required", invalid_type_error:"field7 array item should have type date" })),
      field8: z.date({ required_error:"field8 is required", invalid_type_error:"field8 should be type date" })
  }),
});

const updateRandom2ZodSchema = z.object({
  body: z.object({
    field1: z.string({ invalid_type_error:"field1 should be type string" }),
      field2: z.array(z.string({ invalid_type_error:"field2 array item should have type string" })).optional(),
      field3: z.string({ invalid_type_error:"field3 should be type string" }).optional(),
      field4: z.date({ invalid_type_error:"field4 should be type date" }),
      field5: z.array(z.string({ invalid_type_error:"field5 array item should have type string" })).optional(),
      field6: z.array(z.number({ invalid_type_error:"field6 array item should have type number" })).optional(),
      field7: z.array(z.date({ invalid_type_error:"field7 array item should have type date" })).optional(),
      field8: z.date({ invalid_type_error:"field8 should be type date" })
  }),
});

export const Random2Validation = {
  createRandom2ZodSchema,
  updateRandom2ZodSchema
};
