import React, { useEffect, useRef, useState } from "react";

//OUTSIDE COMPONENTS
import Chartjs from "chart.js";

interface ReportGraphicProps {
	GraphType: string;
	isResponsive?: boolean;
}

const ReportGraphic = ({ GraphType, isResponsive }: ReportGraphicProps) => {
	// initialise with null, but tell TypeScript we are looking for an HTMLCanvasElement
	const chartContainer = useRef<HTMLCanvasElement>(null);
	const [chartInstance, setChartInstance] = useState(null);

	const chartConfig = {
		type: { GraphType },
		responsive: { isResponsive }
	};

	useEffect(() => {
		// strict null checks need us to check if chartContainer and current exist.
		// but once current exists, it is of type HTMLCanvasElement
		if (chartContainer && chartContainer.current) {
			const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
			setChartInstance(newChartInstance);
		}
	}, [chartContainer]);

	return (
		<div>
			<canvas ref={chartContainer} />
		</div>
	);
};

export default ReportGraphic;
