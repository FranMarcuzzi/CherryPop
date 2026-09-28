import { getCampaign,putCampaign,db,err } from '@/lib/store';
import { normalizeCampaign } from '@/lib/campaign';
type C={params:Promise<{id:string}>};
export async function GET(_:Request,{params}:C){try{const c=await getCampaign((await params).id);return c?Response.json(c):Response.json({error:'No encontrada'},{status:404})}catch(e){return err(e)}}
export async function PUT(req:Request,{params}:C){try{const id=(await params).id;const prior=await getCampaign(id);if(!prior)return Response.json({error:'No encontrada'},{status:404});const c=normalizeCampaign({...prior,...(await req.json() as object),createdAt:prior.createdAt},id);await putCampaign(c);return Response.json(c)}catch(e){return err(e)}}
export async function DELETE(_:Request,{params}:C){try{await db().prepare('DELETE FROM campaigns WHERE id=?').bind((await params).id).run();return Response.json({ok:true})}catch(e){return err(e)}}
