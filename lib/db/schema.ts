import {pgTable,text,uuid,integer,boolean} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { timestamp } from "drizzle-orm/pg-core"


export const files=pgTable("files",{
     id: uuid("id").defaultRandom().primaryKey(),

     //basic files and folder information
     name:text("name").notNull(),//usernamw cant be empty in ts we can write like this 
     path:text("path").notNull(),//document/project/resume url
     size:integer("size").notNull(),
     type:text("type").notNull(),//"folder"
     
     
     //storage information
     fileUrl:text("file_url").notNull(),//url to access file

     thumbnailUrl:text("thumbnail_url"),
     
     //ownership
     userId:text("user_id").notNull(),
     parentId:uuid("parent_id"),//parent folder id (null for root items)

     //file folder flags

     isFolder:boolean("is_folder").default(false).notNull(),
     isStarred:boolean("is_starred").default(false).notNull(),
     isTrash:boolean("is_trash").default(false),

     //timestamps
    
     createdAt:timestamp("created_At").defaultNow().notNull(),  
     updatedAt:timestamp("updated_At").defaultNow().notNull(),
})