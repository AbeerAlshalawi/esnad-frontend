/* eslint-disable react/prop-types */
export default function BubbleContent({ isLoading, message }) {
  const titleReplacements = {
    "1- التحقق من المواد القانونية ذات الصلة:": "المواد القانونية ذات الصلة",
    "2- فحص القضايا السابقة المشابهة:": "القضايا السابقة المشابهة",
    "3- استخراج النقاط المهمة التي قد تكون منسية في القضايا المشابهة:":
      "النقاط المهمة المنسية",
    "4- تقديم إجابة واضحة ومنظمة:": "الإجابة المنظمة",
  };

  const formattedMessage = isLoading ? (
    <TypingDots></TypingDots>
  ) : (
    message.split("\n").map((line, index) => {
      const titleMatch = line.match(/^\*\*(.*?)\*\*$/);

      if (titleMatch) {
        let extractedTitle = titleMatch[1].trim();

        const newTitle = titleReplacements[extractedTitle] || extractedTitle;

        return (
          <div key={index}>
            <h2 className="text-lg font-bold text-green-700">{newTitle}</h2>
          </div>
        );
      } else {
        return (
          <div key={index}>
            <p className="whitespace-normal text-sm font-medium leading-loose text-gray-800">
              {line}
              <br></br>
            </p>
          </div>
        );
      }
    })
  );

  return (
    <div className="max-w-[48rem] break-words rounded-[2rem] border border-border bg-white px-7 py-5 text-right">
      {formattedMessage}
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex space-x-1">
      <span className="ml-1 h-2 w-2 animate-bounce rounded-full bg-gray-300 [animation-delay:-0.15s]"></span>
      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-300 [animation-delay:-0.3s]"></span>
      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-300"></span>
    </div>
  );
}
