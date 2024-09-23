export async function  GET(req,res){
    return new Response(process.env.NEXT_PUBLIC_NEXT_SECRET)
}