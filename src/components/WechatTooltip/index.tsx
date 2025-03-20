import { type JSX, Show, createSignal, onMount, onCleanup } from "solid-js";

type Props = {
  children: JSX.Element;
  wechatId: string;
  qrCodeSrc?: string;
};

// 检查是否在浏览器环境
const isBrowser = typeof window !== 'undefined';

function WechatTooltip(props: Props) {
  const [isVisible, setIsVisible] = createSignal(false);
  let tooltipRef: HTMLDivElement | undefined;
  let buttonRef: HTMLDivElement | undefined;

  // 处理外部点击事件
  const handleOutsideClick = (event: MouseEvent) => {
    if (isVisible() && 
        tooltipRef && 
        buttonRef && 
        !tooltipRef.contains(event.target as Node) && 
        !buttonRef.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  // 处理ESC键关闭
  const handleEscKey = (event: KeyboardEvent) => {
    if (isVisible() && event.key === 'Escape') {
      setIsVisible(false);
    }
  };

  onMount(() => {
    // 只在浏览器环境添加事件监听器
    if (isBrowser) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleEscKey);
    }
  });

  onCleanup(() => {
    // 只在浏览器环境移除事件监听器
    if (isBrowser) {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscKey);
    }
  });

  return (
    <div class="relative inline-block">
      <div
        ref={buttonRef}
        onClick={() => setIsVisible(!isVisible())}
        class="cursor-pointer"
      >
        {props.children}
      </div>

      <Show when={isVisible()}>
        <div 
          ref={tooltipRef}
          class="absolute left-1/2 -translate-x-1/2 -translate-y-[280px] mt-1 w-[220px] p-4 bg-white text-darkslate-700 text-center rounded-lg z-50 shadow-lg border border-gray-200 whitespace-normal after:content-[''] after:block after:rotate-45 after:w-4 after:h-4 after:absolute after:-bottom-2 after:-translate-x-1/2 after:left-1/2 after:bg-white after:z-20"
        >
          <div class="relative">
            {/* 关闭按钮 */}
            <button 
              onClick={() => setIsVisible(false)}
              class="absolute -right-2 -top-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
              aria-label="关闭"
            >
              ×
            </button>
            
            <p class="text-lg font-bold mb-2">微信扫一扫</p>
            
            {/* 二维码图片 */}
            <div class="w-[180px] h-[180px] mx-auto mb-2 bg-gray-100 flex items-center justify-center">
              {props.qrCodeSrc ? (
                <img src={props.qrCodeSrc} alt="微信二维码" class="w-full h-full object-contain" />
              ) : (
                <p class="text-gray-500 text-sm">二维码图片占位</p>
              )}
            </div>
            
            {/* 微信号 */}
            <p class="text-sm">
              微信号: <span class="font-medium select-all">{props.wechatId}</span>
            </p>
          </div>
        </div>
      </Show>
    </div>
  );
}

export default WechatTooltip; 