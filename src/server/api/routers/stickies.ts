import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc"

export const stickiesRouter = createTRPCRouter({
    //Return all stickies in users database 
    getAll: protectedProcedure.query(({ ctx }) => {
        //the "stickies" before findmany is refering to "stickies" added to "root.ts" 
        return ctx.prisma.stickies.findMany({
            where: {
                userId: ctx.session.user.id
            },
        })
    }),

    //create new stickies 
    create: protectedProcedure
    .input(z.object({ title: z.string(), content: z.string()}))
    .mutation(async ({ ctx, input }) => {
        return ctx.prisma.stickies.create({
            data: {
                title: input.title,
                content: input.content, 
                userId: ctx.session.user.id,
            }
        });
    }), 

    //delete a stickie 
    delete: protectedProcedure
    .input(z.object({ id: z.string()}))
    .mutation(async({ ctx, input }) => {
        return ctx.prisma.stickies.delete({
            where: {
                id: input.id
            },
        });
    }),
});