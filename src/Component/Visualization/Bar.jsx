import { BarChart } from '@mui/x-charts/BarChart';

const Bar = () => {

    return (
        <div>
               <BarChart
  xAxis={[
    {
      id: 'barCategories',
      data: ['Posted Rate', 'Participate Rate', 'Winner Rate'],
      scaleType: 'band',
    },
  ]}
  series={[
    {
      data: [9, 8.6, 7.9],
    },
  ]}
  width={450}
  height={400}
/>
        </div>
    );
};

export default Bar;