'use client'
import { getDiffClass } from "@/app/utils";


interface TableRowProps {
    todayValue: number,
    yesterdayValue: number,
    theseWeekDay: number,
    rowName: string;
    handleRowClick: () => void;
}

export default function TableRow({todayValue, yesterdayValue, theseWeekDay, rowName, handleRowClick } : TableRowProps) {
    const diff = Math.round(((todayValue - yesterdayValue) / yesterdayValue) * 100); // 4%
    const todayCellClass = `${getDiffClass(diff)} stats-table__cell_current-day`;
    return (
        <tr className="stats-table__row" onClick={handleRowClick}>
            <td className="stats-table__cell">
                {rowName}
            </td>

            <td className={`stats-table__cell ${todayCellClass}`}>
                {todayValue.toLocaleString('ru-RU')}
            </td>

            <td className="stats-table__cell ">
                {yesterdayValue.toLocaleString('ru-RU')}{' '}
                <span className="stats-table__cell_diff">
                    {diff > 0 ? `+${diff}%` : `${diff}%`}
                </span>
            </td>

            <td className="stats-table__cell">
                {theseWeekDay.toLocaleString('ru-RU')}
            </td>
        </tr>
    )

}