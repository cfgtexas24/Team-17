// PatientChart.tsx
import React, { useEffect, useRef} from 'react';
import * as d3 from 'd3';
import { Patient } from './interfaces'; 

interface PatientChartProps {
    patient: Patient | null;
    onHide: () => void; // Function to hide the chart
}

const PatientChart: React.FC<PatientChartProps> = ({ patient, onHide }) => {
    const svgBarRef = useRef<SVGSVGElement | null>(null);
    const svgPieRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        if (patient) {
            drawBarChart(patient);
            drawPieChart(patient);
        }
    }, [patient]);

    const drawBarChart = (patient: Patient) => {
        d3.select(svgBarRef.current).selectAll('*').remove();

        const appointments = patient.appointments || [];
        const visitsCount = appointments.filter(appointment => appointment.doctor).length;
        const eventsCount = appointments.filter(appointment => appointment.event).length;

        const data = [
            { type: 'Doctor Visits', count: visitsCount },
            { type: 'Events', count: eventsCount }
        ];

        const svg = d3.select(svgBarRef.current);
        const margin = { top: 20, right: 30, bottom: 40, left: 50 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const x = d3.scaleBand()
            .domain(data.map(d => d.type))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count) || 0])
            .nice()
            .range([height, 0]);

        svg.attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const chartGroup = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        chartGroup.selectAll('.bar')
            .data(data)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', d => x(d.type) || 0)
            .attr('y', d => y(d.count))
            .attr('width', x.bandwidth())
            .attr('height', d => height - y(d.count))
            .attr('fill', '#8884d8');

        chartGroup.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('text')
            .attr('transform', 'translate(0,5)')
            .style('text-anchor', 'middle');

        chartGroup.append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(y));
    };

    const drawPieChart = (patient: Patient) => {
        // Clear existing content
        d3.select(svgPieRef.current).selectAll('*').remove();
    
        const appointments = patient.appointments || [];
        const visitsCount = appointments.filter(appointment => appointment.doctor).length;
        const eventsCount = appointments.filter(appointment => appointment.event).length;
        // Creates a data array for the pie chart.
        const data = [
            { label: 'Doctor Visits', value: visitsCount },
            { label: 'Events', value: eventsCount }
        ];
    
        const width = 400;
        const height = 400;
        const radius = Math.min(width, height) / 2;
        // Defines the size and center of the pie chart.
        const svg = d3.select(svgPieRef.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`);
        // Uses scaleOrdinal to assign specific colors to the pie chart slices for doctor visits and events.
        const color = d3.scaleOrdinal<string>()
            .domain(data.map(d => d.label))
            .range(['#4e79a7', '#f28e2c']); // Colors for Doctor Visits and Events
    
        const pie = d3.pie<{ label: string; value: number }>()
            .value(d => d.value);
    
        const arc = d3.arc<d3.PieArcDatum<{ label: string; value: number }>>()
            .innerRadius(0)
            .outerRadius(radius);
    
        // Draw pie slices
        svg.selectAll('path')
            .data(pie(data))
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', d => color(d.data.label))
            .attr('stroke', '#ffffff')
            .attr('stroke-width', 2);
    
        // Add labels to each slice
        svg.selectAll('text')
            .data(pie(data))
            .enter()
            .append('text')
            .attr('transform', d => `translate(${arc.centroid(d)})`) // Position the labels at the center of each slice
            .attr('text-anchor', 'middle')
            .attr('font-size', '14px')
            .attr('fill', '#000000')
            .text(d => `${d.data.label}: ${d.data.value}`);
    };    

    return (
        <div>
            <button onClick={onHide}>Hide Patient Chart</button>
            <svg ref={svgBarRef}></svg>
            <svg ref={svgPieRef}></svg>
        </div>
    );
};

export default PatientChart;


