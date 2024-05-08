export async function Postpone(req){
    const formData = await req.formData();
    const file = formData.get('file');
    const {name, type} = file;
    return Response.json(file);
}