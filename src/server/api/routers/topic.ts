import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const topicRouter = createTRPCRouter({
    //Return all the content within topic database 
    getAll: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.topic.findMany({
            where: {
                userId: ctx.session.user.id,
            },
        });
    }),

    //add new or alter titles 
    create: protectedProcedure
    .input(z.object({ title: z.string()}))
    .mutation(({ ctx, input }) => {
        return ctx.prisma.topic.create({
            data: {
                title: input.title,
                userId: ctx.session.user.id
            },
        });
    }),
});