import { ensureDemo,db,putCampaign,err } from '@/lib/store';
import { normalizeCampaign } from '@/lib/campaign';
export async function GET(){try{await ensureDemo();const rows=await db().prepare('SELECT config FROM campaigns ORDER BY updated_at DESC').all<{config:string}>();return Response.json((rows.results||[]).map(r=>JSON.parse(r.config)));}catch(e){return err(e)}}
export async function POST(req:Request){try{const c=normalizeCampaign(await req.json());c.id=crypto.randomUUID();c.createdAt=new Date().toISOString();await putCampaign(c);return Response.json(c,{status:201});}catch(e){return err(e)}}
