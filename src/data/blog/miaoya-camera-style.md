---
title: "妙鸭相机风格探索流程"
description: "分享妙鸭相机风格的探索与实现过程"
pubDate: 2023-07-19
category: "ai"
draft: false
---

# 妙鸭相机风格个人探索流程

## 介绍

妙鸭相机是近期非常流行的AI人像处理应用。本文记录了个人探索复现其风格效果的过程和心得。

### 官方效果展示

[妙鸭相机：让每个人都拥有一个AI摄影师](https://mp.weixin.qq.com/s/rrW2Pu97boIU2R5zAdr7CA)

<img src="/images/blog/miaoya-camera-style/Untitled.png" alt="妙鸭相机风格示例" width="300" />

<img src="/images/blog/miaoya-camera-style/Untitled%201.png" alt="妙鸭相机风格示例" width="300" />

<img src="/images/blog/miaoya-camera-style/Untitled%202.png" alt="妙鸭相机风格示例" width="300" />

## 用SD复现的步骤

### 1. 模型训练

- 训练环境：使用512×512分辨率进行Lora训练
- 基础模型：由于没有官方专用模型，选用了beautifulRealistic作为基础
- 后期生成：额外尝试了leosamsMoonfilm模型进行对比测试

### 2. 参数测试与优化

针对不同阶段训练的Lora模型，使用XY表格方法进行参数调优：

![Lora参数测试](/images/blog/miaoya-camera-style/Untitled%203.png)

测试结果显示，003版本在权重0.6~0.7范围内效果最佳。

### 3. 图像生成流程

**第一阶段：初步生成**
- Lora权重：设置为0.6
- 提示词：基于目标风格图片反推并适当修改
- 采样方法：DPM++2s a karras

**第二阶段：姿态与光影调整**
- 证件照处理：选择正脸照片，使用controlnet的pose模型，权重设为0.75左右
- 光影优化：若需柔和光效，可使用controlnet的brightness模块配合光影图，权重约0.25

![图层效果示例](/images/blog/miaoya-camera-style/mask.png)

**第三阶段：精细调整**
- 筛选：从生成的四张图中选择最佳效果进行下一步处理
- 图生图优化：
  - 提高Lora权重至0.7以上
  - 降低重绘幅度至0.4以下
  - 可使用tangbohu-detial这个Lora的负值实现皮肤磨皮效果

### 4. 高级光影技巧

使用图生图方式调节灯光效果：
- 输入：选择合适的打光照片（如下图）
- 控制：在controlnet中放入原版人物照片
- 模型：使用canny等线稿保留模型
- 参数：权重约0.7，结束位置约0.7

![灯光调节示例](/images/blog/miaoya-camera-style/Untitled%204.png) 