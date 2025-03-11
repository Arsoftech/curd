import { NextResponse } from "next/server";
import connectToMongodb from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";

export async function POST(request) {
    // destructuring the data
    const{title , description}=await request.json();

    await connectToMongodb();
    await Topic.create({title, description});
    return NextResponse.json({message:"Topic Created"},{status:201});
    
}

export async function GET(){
    await connectToMongodb();
    const topics = await Topic.find();
    return NextResponse.json({topics})
}
// Delete
export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectToMongodb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic Deleted"},{status:200});

}