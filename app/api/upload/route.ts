import { db } from "@/lib/db";
import { files } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()//security authentication to check where wheather the user is signed in or not

    if (!userId) {
      return NextResponse.json({ error: "unauthorized" },
        { status: 401 }
      )
    }

    //parse request body
    const body = await request.json()
    const { imagekit, userId: bodyUserId } = body


    if (bodyUserId !== userId) {
      return NextResponse.json({ error: "unauthorized" },
        { status: 401 });
    }

    if (!imagekit || !imagekit.url) {
      return NextResponse.json({ error: "Invalid file Upload data" },
        { status: 401 })

    }
    const fileData = {
      name: imagekit.name || "Untitled",
      path: imagekit.filePath || `/cloudera/${userId}/${imagekit.name}`,
      size: imagekit.size || 0,
      type: imagekit.fileType || "image",
      fileUrl: imagekit.url,
      thumbnailUrl: imagekit.thumbnailUrl || null,
      userId: userId,
      parentId: null, // Root level by default
      isFolder: false,
      isStarred: false,
      isTrash: false,
    };
    const [newFile] = await db.insert(files).values(fileData).returning()
    return NextResponse.json(newFile)
  } catch (error) {
    return NextResponse.json({ error: "Failed to save data in databse" }, { status: 500 })

  }
}
