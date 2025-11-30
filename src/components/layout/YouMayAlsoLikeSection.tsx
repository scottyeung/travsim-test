import type { FunctionComponent } from "../../common/types";
import { Button } from "../ui/Button";

export const YouMayAlsoLikeSection = (): FunctionComponent => {
	return (
		<div
			className="w-full bg-cover bg-center bg-no-repeat py-12 px-20"
			style={{ backgroundImage: "url(/assets/you-may-also-like-bg.png)" }}
		>
			<div className="max-w-container mx-auto flex gap-17 items-stretch">
				<div className="flex-1 bg-accent-blue rounded-3xl h-[389px]" />

				<div className="flex flex-col gap-6 justify-center flex-1">
					<p className="text-body-lg text-black uppercase">
						YOU MAY ALSO LIKE
					</p>
					<h2 className="text-heading-lg text-black">
						Europe Regional Package
					</h2>
					<p className="text-body-lg text-white">From $15,99</p>
					<Button className="bg-primary-red w-[322px]" size="lg">
						View Package
					</Button>
				</div>
			</div>
		</div>
	);
};
