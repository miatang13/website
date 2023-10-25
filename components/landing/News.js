const dates_style = "text-slate-400 pr-2";
import news from "../../settings/news";
import NewsRow from "./NewsRow";

export default function News() {
  var news_by_year = {};
  news.forEach((item) => {
    let month = parseInt(item.month);
    let year = parseInt(item.year);
    if (item.hide) {
      return;
    }
    if (item.year in news_by_year) {
      if (month in news_by_year[year]) {
        news_by_year[year][month].push(item);
      } else {
        news_by_year[year][month] = [item];
      }
    } else {
      news_by_year[year] = {};
      news_by_year[year][month] = [item];
    }
  });

  // now we want to put all events in order for each year
  let all_events = {};
  let years = Object.keys(news_by_year);
  for (let i = 0; i < years.length; i++) {
    let year = years[i];
    let ordered_events = [];
    let months = Object.keys(news_by_year[year]);
    let intMonths = months.map((item) => parseInt(item));
    intMonths.sort((a, b) => a - b);
    intMonths = intMonths.reverse();
    for (let i = 0; i < intMonths.length; i++) {
      ordered_events.push(news_by_year[year][intMonths[i]]);
    }
    all_events[year] = ordered_events;
  }

  return (
    <ul className='list-none list-inside'>
      {Object.keys(all_events).map((year) => {
        return (
          <li className='grid md:grid-cols-6 pb-6' key={year}>
            <h4 className={dates_style}>{year}</h4>
            <div className='col-span-5 flex flex-col'>
              {all_events[year].map((yearEvents) => {
                return yearEvents.map((item) => {
                  return !item.hide && <NewsRow {...item} key={item.title} />;
                });
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
