import { Empty } from "antd";
import { calculateTimePeriod } from "../../utilis/calculateTimePeriod";
import { Core } from "..";
import Icon from "../icon";

function Education({ data, type, card }) {
  console.log("Education data", data);
  return (
    <>
      {card ? (
        <Core.Card className={"p-5 border"}>
          <div className="flex justify-between items-start">
            <h5 className="text-black-1 text-[18px] leading-[28px] font-semibold">
              Education
            </h5>
            {type === "candidate" && (
              <Core.ProficienciesActions
                buttons={["add"]}
                type="educationsData"
              />
            )}
          </div>
          <div className="flex justify-start items-start flex-col gap-y- 10 gap-y-6 pt-3">
            {data?.length ? (
              <>
                {data?.map((value, index) => {
                  if (!value?.degree || !value?.organization) {
                    return null;
                  }
                  // console.log("value dates",value.startDate,value.endDate)

                  console.log("-------------------");
                  console.log("value?.startDate", value?.startDate);
                  console.log(
                    "value?.currentlyInProcess",
                    value?.currentlyInProcess
                  );
                  console.log(
                    "check",
                    value?.startDate,
                    value?.currentlyInProcess === true
                      ? "present"
                      : value?.endDate
                  );
                  console.log("-------------------");
                  return (
                    <div
                      key={index * 4}
                      className="relative flex justify-between gap-x-3 w-full"
                    >
                      <div className="absolute top-0 right-0 z-[200] flex justify-end">
                        <Core.ProficienciesActions
                          buttons={["edit"]}
                          type={"educationsData"}
                          id={value?._id}
                        />
                      </div>
                      <div className="flex justify-center items-center min-w-[58px] h-[58px] bg-gray-7 rounded-[10px] overflow-hidden">
                        {/* <Avatar shape="square" size={60} src={value?.logo}>!</Avatar> */}
                        <Icon name="Education" size={150} />
                      </div>
                      <div className="w-full">
                        <div className="w-full h-full flex justify-between items-end">
                          <div>
                            <h6 className="text-[16px] leading-[20px] font-semibold">
                              {value?.degree}
                            </h6>
                            <p className="text-black-3 text-[12px] leading-[20px] font-medium">
                              {value?.organization}
                            </p>
                            {value?.startDate &&
                              (value?.endDate ||
                                value?.currentlyInProcess === true) && (
                                <p className="text-gray-6 text-[12px] leading-[20px]">
                                  {calculateTimePeriod(
                                    value?.startDate,
                                    value?.currentlyInProcess === true
                                      ? "present"
                                      : value?.endDate
                                  )}
                                </p>
                              )}
                            {/* <p className='text-gray-6 text-[14px] leading-[20px] mt-4' dangerouslySetInnerHTML={{ __html: value?.description }}></p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <div className="flex justify-center w-full">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </div>
            )}
          </div>
        </Core.Card>
      ) : (
        <>
          <div className="flex justify-between items-start">
            <h5 className="text-black-1 text-[18px] leading-[28px] font-semibold">
              Education
            </h5>
            {type === "candidate" && (
              <Core.ProficienciesActions
                buttons={["add"]}
                type="educationsData"
              />
            )}
          </div>
          <div className="flex justify-start items-start flex-col gap-y- 10 gap-y-6 pt-3">
            {data?.length ? (
              <>
                {data?.map((value, index) => {
                  if (!value?.degree || !value?.organization) {
                    return null;
                  }
                  // console.log("value dates",value.startDate,value.endDate)
                  return (
                    <div
                      key={index * 4}
                      className="flex justify-between gap-x-3"
                    >
                      <div className="flex justify-center items-center min-w-[58px] h-[58px] bg-gray-7 rounded-[10px] overflow-hidden">
                        {/* <Avatar shape="square" size={60} src={value?.logo}>!</Avatar> */}
                        <Icon name="Education" size={150} />
                      </div>
                      <div className="w-full">
                        <div className="w-full h-full flex justify-between items-end">
                          <div>
                            <h6 className="text-[16px] leading-[20px] font-semibold">
                              {value?.degree}
                            </h6>
                            <p className="text-black-3 text-[12px] leading-[20px] font-medium">
                              {value?.organization}
                            </p>
                            {value?.startDate &&
                              (value?.endDate ||
                                value?.currentlyInProcess === true) && (
                                <p className="text-gray-6 text-[12px] leading-[20px]">
                                  {calculateTimePeriod(
                                    value?.startDate,
                                    value?.currentlyInProcess === true
                                      ? "present"
                                      : value?.endDate
                                  )}
                                </p>
                              )}
                            {/* <p className='text-gray-6 text-[14px] leading-[20px] mt-4' dangerouslySetInnerHTML={{ __html: value?.description }}></p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <div className="flex justify-center w-full">
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Education;
