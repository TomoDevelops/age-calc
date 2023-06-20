import { DatePicker } from "@/components/ui/DatePicker";

export default function Home() {
    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <div className="h-1/2 w-10/12 lg:w-1/2 flex flex-col items-center justify-between p-6 bg-slate-50 rounded-md drop-shadow-md">
                <h2 className="text-2xl block w-full text-center relative before:absolute before:-bottom-5 before:left-0 before:right-0 before:h-0.5 before:bg-black">
                    年齢を計算
                </h2>
                <DatePicker />
                <input type="text" value={`1`} />
            </div>
        </main>
    );
}
