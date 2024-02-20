# QuickDocs App 

This is a fullstack web responsive transcript app for Journaling, NoteTaking and Creating mini stickie notes. 

![project5](https://user-images.githubusercontent.com/55498566/225809952-7eeb5cfb-14d4-461d-875a-a88209e7bb1a.png)


### Link to project: https://quick-docs-indol.vercel.app/
Needs to sign in to save personal content. 


## Tech Used: 
React, NextJs, Typescript, Next-Auth, Prisma, TRPC, Material UI, DaisyUI, TailwindCSS. 

**_npm run dev_**

Went with the nextJs SSR option because notetaking types of apps usually load slower the more data. Inlcuded a few lazy loading options as the site is split into different webpages, saving time on having to load everything at once for the user. This app isn't UI heavy so chose DaisyUI option for quick clean buttons and setups, while having MaterialUI add a more professional touch with its icons. With Next-Auth, instead of using credentials and making users create an account and password, making them sign in via providers is currently more secure; less hustle to memorize a new password as well. 


