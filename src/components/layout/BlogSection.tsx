import type { FunctionComponent } from "../../common/types";

const blogPosts = [
	{
		title: "The Ultimate Guide to eSIM Technology",
		excerpt:
			"Everything you need to know about eSIMs and how they're revolutionizing the way we stay connected while traveling.",
		image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
		date: "March 15, 2024",
	},
	{
		title: "Top 10 Travel Destinations for 2024",
		excerpt:
			"Discover the most exciting destinations to visit this year and how to stay connected with eSIM technology.",
		image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
		date: "March 10, 2024",
	},
	{
		title: "How to Save Money on International Roaming",
		excerpt:
			"Learn practical tips and tricks to avoid expensive roaming charges and stay connected affordably.",
		image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800",
		date: "March 5, 2024",
	},
];

export const BlogSection = (): FunctionComponent => {
	return (
		<div className="w-full bg-white pt-[70px] pb-[70px] px-26">
			<div className="max-w-container mx-auto flex flex-col items-start gap-10">
				<h2 className="text-heading-lg text-black">
					Useful resources from our blog
				</h2>

				<div className="w-full flex gap-8">
					{blogPosts.map((post, index) => (
						<div
							key={index}
							className="flex-1 flex flex-col gap-6 bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
						>
							<div className="w-full h-48 bg-gradient-to-br from-blue-200 to-purple-200 overflow-hidden">
								<img
									alt={post.title}
									className="w-full h-full object-cover"
									src={post.image}
								/>
							</div>

							<div className="px-6 pb-6 flex flex-col gap-4">
								<p className="text-sm text-gray-500">{post.date}</p>
								<h3 className="text-xl font-bold text-black leading-tight">
									{post.title}
								</h3>
								<p className="text-body-lg text-black opacity-80">
									{post.excerpt}
								</p>
								<button className="text-sm font-semibold text-primary-red hover:opacity-80 transition-opacity self-start">
									READ MORE →
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
