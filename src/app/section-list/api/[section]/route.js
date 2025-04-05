import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const GET = async (request, {params}) =>{
    const db = await connectDB();

    
    const sectionCollections = db.collection('add-task')
    try {
       const sectionList = await  sectionCollections.find({section: params.section}).toArray();
       return NextResponse.json({sectionList})
    } catch (error) {

    return NextResponse.json({message: "No Data Found", error}) 
    }
}