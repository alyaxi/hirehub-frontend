import { Avatar, Empty } from "antd";
import { calculateTimePeriod } from "../../utilis/calculateTimePeriod";
import { Core } from "..";

function Experience({ data, type, card }) {
  // console.log("type Experience", type)
  console.log("Experience data", data);

  return (
    <>
      {card ? (
        <>
          <Core.Card className={"p-5 border"}>
            <div className="flex justify-between items-start">
              <h5
                className={`text-black-1 text-[18px] leading-[28px] font-semibold ${
                  card && "mb-2"
                }`}
              >
                Experience
              </h5>
              {type === "candidate" && (
                <Core.ProficienciesActions
                  buttons={["add"]}
                  type={"experiencesData"}
                />
              )}
            </div>
            <div className="flex justify-start items-start flex-col gap-y-2 pt- 3">
              {data?.length ? (
                <>
                  {data?.map((value, index) => {
                    if (!value?.title || !value?.company) {
                      return null;
                    }
                    return (
                      <div
                        key={index * 4}
                        className={`relative flex justify-between gap-x-3 w-full rounded-[15px ]   ${
                          index === data?.length - 1 ? "" : "border-b-[1px]"
                        } border-b-gray -2 bg-[#f7f7f7 ] px- 3 py-4`}
                      >
                        <div className="absolute top-2 right-0 z-[200] flex justify-end">
                          <Core.ProficienciesActions
                            buttons={["edit"]}
                            type={"experiencesData"}
                            id={value?._id}
                          />
                        </div>
                        <div className="w-full">
                          <div className="w-full h-full flex justify-between items-end">
                            <div>
                              <h6 className="text-[16px] leading-[20px] font-semibold">
                                {value?.title ? value?.title : "-"}
                              </h6>
                              <p className="text-black-3 text-[12px] leading-[20px] font-medium">
                                {value?.company ? value?.company : "-"}
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
                              <p
                                className="text-gray-6 text-[14px] leading-[20px] mt-4"
                                dangerouslySetInnerHTML={{
                                  __html: value?.description,
                                }}
                              ></p>
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
        </>
      ) : (
        <>
          <div className="flex justify-between items-start">
            <h5
              className={`text-black-1 text-[18px] leading-[28px] font-semibold ${
                card && "mb-2"
              }`}
            >
              Experience
            </h5>
            {type === "candidate" && (
              <Core.ProficienciesActions buttons={["add"]} />
            )}
          </div>
          <div className="flex flex-col justify-start gap-x-3 gap-y-2 mt-3">
            {data?.length ? (
              <>
                {data?.map((value, index) => {
                  if (!value?.title || !value?.company) {
                    return null;
                  }
                  return (
                    <div
                      key={index * 4}
                      className="relative flex justify-between gap-x-3 w-full rounded-[15px] border bg-[#f7f7f7] px-3 py-5"
                    >
                      <div className="flex justify-center items-center min-w-[58px] h-[58px] bg-gray-7 rounded-[10px] overflow-hidden">
                        <Avatar shape="square" size={60} src={value?.logo}>
                          !
                        </Avatar>
                      </div>
                      <div className="w-full">
                        <div className="w-full h-full flex justify-between items-end">
                          <div>
                            <h6 className="text-[16px] leading-[20px] font-semibold">
                              {value?.title ? value?.title : "-"}
                            </h6>
                            <p className="text-black-3 text-[12px] leading-[20px] font-medium">
                              {value?.company ? value?.company : "-"}
                            </p>
                            {value?.startDate && value?.endDate && (
                              <p className="text-gray-6 text-[12px] leading-[20px]">
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
                              </p>
                            )}
                            <p
                              className="text-gray-6 text-[14px] leading-[20px] mt-4"
                              dangerouslySetInnerHTML={{
                                __html: value?.description,
                              }}
                            ></p>
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

export default Experience;
