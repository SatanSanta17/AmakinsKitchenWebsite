import Featured from "@/components/Featured";
import Slider from "@/components/Slider";
import Offers from "@/components/Offers";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<Slider />
			<Featured />
			<Offers />
		</main>
	);
}
