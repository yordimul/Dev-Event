import React from "react";
import ExploreBtn from "@/components/ExploreBtn";

import EventCard from "@/components/EventCard";
import events from "@/lib/constants";

function home() {
	return (
		<section>
			<h1 className="text-center">
				The Hub for every Dev <br /> Event you can't miss
			</h1>
			<p className="text-center ml-5">
				Hackathons, meetups and conferences, all in one place{" "}
			</p>

			<ExploreBtn />

			<div className="mt-20 space-y-7">
				<h3> Featured Events </h3>
				<ul className="events">
					{events.map((event) => (
						<li key={event.title} className="list-none">
						
							<EventCard {...event} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default home;
