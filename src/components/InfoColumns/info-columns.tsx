import { columnsInfos } from "./infos";

const InfoColumns = () => {
  return (
    <div className="hidden h-[600px] justify-end sm:flex xl:w-1/4 2xl:w-5/12">
      <div className="m-2 w-[160px] rounded-md bg-[#EBF0F4] p-2 dark:bg-primary-foreground">
        <div className="space-y-2 text-xs">
          {columnsInfos.map((item) => (
            <div key={item.id}>
              <h5 className="font-bold">{item.title}</h5>
              <p className="font-thin">{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoColumns;
