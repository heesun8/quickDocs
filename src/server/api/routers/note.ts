import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const noteRouter = createTRPCRouter({
    //Find all our notes within a topic 
    getAll: protectedProcedure
        .input(z.object({ topicId: z.string() }))
        .query(({ ctx, input }) => {
            //the "note" before findmany is refering to "note" added to "root.ts" 
            return ctx.prisma.note.findMany({
                where: {
                    topicId: input.topicId
                },
            })
        }),

    //Create new notes 
    create: protectedProcedure
        .input(z.object({ title: z.string(), content: z.string(), topicId: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.note.create({
                data: {
                    title: input.title,
                    content: input.content,
                    topicId: input.topicId
                }
            });
        }),

    //delete a note using the info on id 
    delete: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.note.delete({
                where: {
                    id: input.id
                }
            });
        })
});