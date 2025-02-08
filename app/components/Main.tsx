import { Building2, House, Info, MessageCircleQuestion, MessageSquareText, Tags, Users } from "lucide-react";
import Link from "next/link";

export default function Main() {
    return (
        <main className="grid grid-cols-main">
            <aside className="bg-yellow-500">
                <nav>
                    <ul>
                        <div className="flex flex-col gap-popover">
                            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><House className="w-popover-icons" />Home</Link>
                            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><MessageCircleQuestion className="w-popover-icons" />Questions</Link>
                            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><Tags className="w-popover-icons" />Tags</Link>
                        </div>
                        <hr className="m-popover" />
                        <div className="flex flex-col gap-popover">
                            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><Users className="w-popover-icons" />Users</Link>
                            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><Building2 className="w-popover-icons" />Companies</Link>
                        </div>
                        <hr className="m-popover" />
                        <div className="flex flex-col gap-popover">
                            <div className="flex justify-between">
                                <h3 className="text-base">LABS</h3>
                                <Link href="#" className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white">
                                    <Info className="w-popover-icons" />
                                </Link>
                            </div>
                            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><MessageSquareText className="w-popover-icons" />Discussions</Link>
                        </div>
                    </ul>
                </nav>
            </aside>
            <section className="bg-red-500">Section</section>
            <aside className="bg-purple-500">Aside2</aside>
        </main>
    )
}