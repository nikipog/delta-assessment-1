'use client'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState } from 'react';
import TableRow from './components/table-row/table-tow';
import RowNames from './const';


export default function TablePage() {
  const [isChartOpen, setIsChartOpen] = useState(false);

  const todayValue = 500521;
  const yesterdayValue = 480521
  const theseWeekDay = 4805821


  const chartOptions = {
    title: {
      text: `${RowNames.Revenue}`,
    },
    xAxis: {
      categories: ['Вчера', 'Сегодня', 'День этой недели'],
    },
    series: [
      {
        name: `${RowNames.Revenue}`,
        data: [todayValue, yesterdayValue, theseWeekDay],
      },
    ],
  };

  const handleRowClick = () => {
    setIsChartOpen((prev) => !prev);
  };



  return (
    <div className="stats-table-wrapper">
      <table className="stats-table">
        <thead className="stats-table__head">
          <tr className="stats-table__row">
            <th className="stats-table__cell stats-table__cell_header">Показатель</th>
            <th className="stats-table__cell stats-table__cell_header stats-table__cell_current-day">
              Текущий день
            </th>
            <th className="stats-table__cell stats-table__cell_header">Вчера</th>
            <th className="stats-table__cell stats-table__cell_header">Этот день недели</th>
          </tr>
        </thead>

        <tbody className="stats-table__body">
          <TableRow
          todayValue={todayValue}
          yesterdayValue={yesterdayValue}
          theseWeekDay={theseWeekDay}
          rowName={RowNames.Revenue}
          handleRowClick={handleRowClick}
          />

          {isChartOpen && (
            <tr className="stats-table__row stats-table__row_chart">
              <td className="stats-table__cell" colSpan={4}>
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
