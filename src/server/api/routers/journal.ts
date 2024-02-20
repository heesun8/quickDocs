import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const journalRouter = createTRPCRouter({
    //return all saved journals 
    getAll: protectedProcedure.query(({ ctx }) => {
        //the "journal" before findmany is refering to "journal" added to "root.ts" 
        return ctx.prisma.journal.findMany({
            where: {
                userId: ctx.session.user.id
            },
        });
    }),

    //create or change new notes content/title 
    create: protectedProcedure
        .input(z.object({ title: z.string(), content: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.journal.create({
                data: {
                    title: input.title,
                    content: input.content,
                    userId: ctx.session.user.id
                },
            });
        }),

    delete: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.journal.delete({
                where: {
                    id: input.id,
                },
            });
        }),
});