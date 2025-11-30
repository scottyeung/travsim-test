import type { FunctionComponent } from "../../common/types";
import { Button } from "../ui/Button";

export const CTASection = (): FunctionComponent => {
	return (
		<div
			className="w-full bg-cover bg-center bg-no-repeat py-[120px] px-26"
			style={{ backgroundImage: "url(/assets/cta-background.png)" }}
		>
			<div className="max-w-container mx-auto flex flex-col items-center gap-6 text-center">
				<p className="text-body-lg text-black uppercase tracking-wide">
					BEST VALUE FOR THE USA
				</p>
				<h2 className="text-heading-lg text-black">
					20GB for 30 days for $24,99
				</h2>
				<div className="pt-6">
					<Button className="bg-primary-red hover:opacity-90 w-[322px]" size="lg">
						Get Package
					</Button>
				</div>
			</div>
		</div>
	);
};
