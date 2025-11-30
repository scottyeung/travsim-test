import type { FunctionComponent } from "../../common/types";

interface TestimonialItem {
  name: string;
  comment: string;
  avatar: string;
}

const testimonials: Array<TestimonialItem> = [
	{
		name: "Jane Foster",
		comment:
			"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
		avatar: "/assets/testimonials/jane-foster.svg",
	},
	{
		name: "Jane Foster",
		comment:
			"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
		avatar: "/assets/testimonials/jane-foster.svg",
	},
	{
		name: "Jane Foster",
		comment:
			"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
		avatar: "/assets/testimonials/jane-foster.svg",
	},
	{
		name: "Jane Foster",
		comment:
			"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
		avatar: "/assets/testimonials/jane-foster.svg",
	},
	{
		name: "Jane Foster",
		comment:
			"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
		avatar: "/assets/testimonials/jane-foster.svg",
	},
	{
		name: "Jane Foster",
		comment:
			"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
		avatar: "/assets/testimonials/jane-foster.svg",
	},
	{
		name: "Jane Foster",
		comment:
			"Whether you're in New York City, Los Angeles, or somewhere in between, stay connected to friends and family back home in South Africa.",
		avatar: "/assets/testimonials/jane-foster.svg",
	},
];

interface TestimonialCardProps {
  name: string;
  comment: string;
  avatar: string;
  className?: string;
  commentClassName?: string;
}

const TestimonialCard = ({
  name,
  comment,
  avatar,
  className = '',
  commentClassName = '',
}: TestimonialCardProps): FunctionComponent => (
	<div className={`flex flex-col gap-4 p-6 bg-gray-50 rounded-3xl ${className}`}>
		<div className="flex items-center justify-start">
			<img
				src={avatar}
				alt={name}
				className="w-16 h-16 rounded-full object-cover"
			/>
		</div>
		<p className={`text-body-lg text-black leading-relaxed mt-4 ${commentClassName}`}>{comment}</p>
		<p className={`text-lg font-bold text-black pt-4 ${commentClassName ? '' : 'mt-auto'}`}>{name}</p>
	</div>
);

export const TestimonialsSection = (): FunctionComponent => {
	return (
		<div className="w-full bg-white pt-[70px] pb-[70px] px-26">
			<div className="max-w-container mx-auto flex flex-col items-center gap-6">
				<h2 className="text-heading-lg text-black text-center">
					Hear what travellers say about us
				</h2>
				<p className="text-body-lg text-black text-center mb-10">
					Your United States of America eSIM features
				</p>

				<div className="w-full flex gap-6">
					{/* Column 1 */}
					<div className="flex flex-col gap-6 w-1/4">
						<TestimonialCard {...testimonials[0]!} />
						<TestimonialCard {...testimonials[4]!} />
					</div>
					{/* Column 2 */}
					<div className="flex flex-col gap-6 w-1/4">
						<TestimonialCard {...testimonials[1]!} className="h-full" commentClassName="text-3xl font-light leading-tight" />
					</div>
					{/* Column 3 */}
					<div className="flex flex-col gap-6 w-1/4">
						<TestimonialCard {...testimonials[2]!} />
						<TestimonialCard {...testimonials[5]!} />
					</div>
					{/* Column 4 */}
					<div className="flex flex-col gap-6 w-1/4">
						<TestimonialCard {...testimonials[3]!} />
						<TestimonialCard {...testimonials[6]!} />
					</div>
				</div>
			</div>
		</div>
	);
};