const dates_style = "text-slate-400 pr-2";
const descriptions_style = "mono font-normal text-slate-800 p-2";
import news from "../../settings/news";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function News() {
  var news_by_year = {};
  news.forEach((item) => {
    let month = item.month;
    if (item.year in news_by_year) {
      if (month in news_by_year[item.year]) {
        news_by_year[item.year][month].push(item);
      } else {
        news_by_year[item.year][month] = [item];
      }
    } else {
      news_by_year[item.year] = {};
      news_by_year[item.year][month] = [item];
    }
  });

  // we want it to be reverse chronological order
  var news_by_year_keys = Object.keys(news_by_year)
    .sort()
    .reverse();

  console.log(news_by_year);

  return (
    <ul className='list-none list-inside'>
      {news_by_year_keys.map((year) => {
        return (
          <li className='grid md:grid-cols-6 pb-6' key={year}>
            <h4 className={dates_style}>{year}</h4>
            <div className='col-span-5 flex flex-col'>
              {Object.keys(news_by_year[year])
                .sort()
                .reverse()
                .map((month) => {
                  return news_by_year[year][month].map((item) => {
                    return (
                      !item.hide && (
                        <div
                          className='grid md:grid-cols-5 my-1'
                          key={item.description}
                        >
                          <div className='p-2'>
                            <span className='pr-2'> {item.emoji}</span>
                            <span
                              className={
                                item.future ? "text-blue-400" : "text-pink-400"
                              }
                            >
                              {months[month - 1]}
                            </span>
                          </div>
                          <div
                            className={
                              "rounded-sm col-span-4 " +
                              (item.future ? "bg-blue-50" : "bg-pink-50") +
                              (item.link
                                ? " hover:bg-pink-200 hover:text-pink-800 cursor-pointer \
                                transition duration-300 ease-in-out"
                                : "")
                            }
                            key={item.description}
                          >
                            {item.link ? (
                              <a
                                href={item.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='underline'
                              >
                                <p className={descriptions_style}>
                                  {item.description}
                                </p>
                              </a>
                            ) : (
                              <p className={descriptions_style}>
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      )
                    );
                  });
                })}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
