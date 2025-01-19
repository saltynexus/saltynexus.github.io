---
layout: post
title: Wave Regimes
date: 2024-09-01 08:00:00-1000
author: Dr. Troy W. Heitmann
description: A useful way to communicate which types of waves are being tested in a laboratory environment.
tags: Experiments, Scaling, Matlab
categories: Wave_Theory
related_posts: false
thumbnail: assets/img/thumbnails_blog/wave_theory.png
---
If you ever get the opportunity to work in or visit a wave lab, I highly recommend it...lots to learn! However, you might be surprised to find the waves look much like those you find on a large pond or lake. The reality is, when you run an ocean experiment in the lab, more often than not, you are working in a scaled environment. So how do the waves you see translate to full scale? Well, the practitioner could communicate the lab-scale wave parameters, along with some scale arguments, and force you to do some math in your head, or they could communicate the dimensionless parameters. The latter is precisely the purpose of this post: to show how to convey the wave climate in terms of dimensionlss parameters, which are applicable at any scale. The Matlab plot below is the end goal, which futher outlines regimes based on popular wave theories.

> ##### WARNING
> The dimensionless scaling is only applicable to water waves under the restoring force of gravity! You can not scale the arguments so small that you introduce the affects of surface tension and expect the dimsionless arguments to hold.
{: .block-warning }

![Wave Theory Plot](/assets/img/blog_posts/wave_theory.png)

Variables h, L, and H in the plot shown above denote the still water depth, wavelength, and wave height respectively. The x-axis is defined by the dimensionless relative depth (h/L) and the y-axis is defined by the dimensionless relative wave height (H/h). You may be wondering why these two parameters were chosen. In short, they are measures of wave dispersion and **finite depth** nonlinearity respectively. When deriving theoretical equations of motion, different equations make different underlying assumptions, thus they are bound in application. For example, linear wave theory would lie along the bottom of the plot (small H/h). Stokes waves are more applicable to the nonlinear wave regime (large H/h). Cnoidal theory applies to nonlinear shallow water waves (upper-left). This is just a high-level overview and diving into further detail would beyond the scope of this post. In summary, the plot is meant to convey measures of dispersion and nonlinearity. Just a note before moving on...this is not the only way to illustrate different wave regimes. The dimensionless parameters utilized here **emphasize shallow water waves**, which is likely why this approach is used by Oregon State University to quantify applications in their tsunami wave basin.

---

Before we dive into the code, I want to highlight the practical application of the plot through a couple examples. Lets say you want to test nonlinear Stokes waves in deep water (assuming the wave maker can make these waves), but you're not sure what combination of h, L, and H leads to these types of waves. First locate the deep water regime to the right of the deep water limit, then select some points above the Stokes waves limit. If you *prescribe the still water depth*, the value of h/L along the x-axis will give you an idea of the expected wavelength (L = h/(h/L)). Likewise, knowing the still water depth, the value of H/h along the y-axis will give you an idea of the expected wave height (H = h*(H/h)). Again, these dimensionless values do not change with scale. Thus, the lab-scale experiment is theoretically valid at full-scale for this combination of parameters.

In another example, imagine you deploy a pressure gague in 10m depth and derive a time series of the free surface elevation. Following some data analysis, you determine the joint probability distribution (JPD) of the wave height and period. From the linear dispersion relation, you can estimate the wavelength, then overlay the dimensionless JPD on the plot to determine which wave theory best describes the data. You can also look at the physical constraints of the lab (wave generator, total depth, etc.) and determine the parameters you should select for testing. Again, there are many ways to use the plot. I've provided these examples to help you utilize and interpret them.

---

To create the plot above in Matlab, start by defining the axis
```matlab
x = logspace(-2,1,2000);
y = logspace(-3,0,2000);
```
If you're wondering how "logspace" works, Matlab will create a row vector of 2000 logarithmically equally spaced points between 10^X1 and 10^X2, where X1 and X2 are the leading two arguments in the function. Specific to this example, the x-axis spans $$10^{-2}$$ to $$10$$ and the y-axis spans $$10^{-3}$$ to $$1$$, as shown above. The choice to use such a fine resolution is due to the log-log scale, where if I recall, Fenton's theory gets cut off visually if the resolution is too fine. 

Next we define the function values for each of the lines. For now, just trust me on the function definitions. The values are stored in a 2D matrix, with each column corresponding to a unique theory. At the end, we programmatically count the number of lines, which is simply a matter of future convenience.

```matlab
lines(:,1) = 26.3.*x.^2;
lines(:,2) = (32*pi^2/3).*x.^2;
lines(:,3) = 0.0625.*tanh((2*pi).*x)./x;
lines(:,4) = 0.142.*tanh((2*pi).*x)./x;
lines(:,5) = log(1./(21.5.*x))./-2.5;
lines(:,6) = x.*(2*pi*1.47);
[~,N] = size(lines);
```

For each line, we're going to create a legend entry. This is just good practice when you have more than one line on a plot. I should not the use of Latex in the strings (i.e. enclosed in $-signs). If you're ever going to include math in your legend strings, this is necessary is my opinion. Otherwise, the string contains a hot mess of symbols.

```matlab
line_names = {'Cnoidal = $26.3x^2$',...
	'Solitary = $32(\pi x)^2/3$',...
	'Stokes = $0.0625\tanh(2\pi x)/x$',...
	'Breaking = $0.142\tanh(2\pi x)/x$',...
	'Fenton = $-\ln((21.5x)^{-1})/2.5$',...
	'Piston = $1.47 (2\pi) x$'};
```	

This next snippet of code loops through each line and clips them where they extend beyond the breaking limit. This is not necessary, but it improves clarity.

```matlab
upper_bound = lines(:,4);
for j = 1:N
    if j ~= 4
        ind = find(lines(:,j) > upper_bound,1,'first');
        lines(ind:end) = nan;
    end
end
```

There are a couple of other lines we can include to help interpret the graph. Specifically, the shallow and deep water limits. I also included a "generation limit", which I believe is calibrated and unique to OSU's piston wave maker (don't recall off the top of my head). Again, for clarity, I'm clipping the horizontal and vertical lines to fit within the breaking limits. The main difference here is that I create an anonymous function for the breaking function (defined above) and use it to define logical indices which fall outside the region.

```matlab
breaking = @(X) 0.142*tanh(2*pi*X)/X;

x_shallow = 0.05.*ones(size(y));
x_shallow(y > breaking(0.05)) = nan;

x_deep = 0.5.*ones(size(y));
x_deep(y > breaking(0.5)) = nan;

y_generation = 0.65.*ones(size(x));
ind = find(y_generation > upper_bound,1,'first');
y_generation(ind:end) = nan;
```

With all the lines defined, we can now plot them and add a legend. Note that I store the line plots in a handle vector called "phand" to create a 1-to-1 correspondance with the legend strings. The legend is placed in the upper right hand corner and I use the Latex interpreter to create the strings as shown in the legend. If I didn't use Latex in the strings above, this wouldn't be necessary. The "AutoUpdate" allows me to later add additional data (e.g. my test points) without adding the the points to the legend.

```matlab
figure; hold on
      
phand = nan(N,1);
for j = 1:N
    if strcmp(line_names{j},'Piston') == 1
        phand(j) = loglog(x,lines(:,j),'--','LineWidth',2);
    else
        phand(j) = loglog(x,lines(:,j),'LineWidth',2);
    end
end

phand(end+1) = loglog(x_shallow,y,'--','LineWidth',2);
phand(end+1) = loglog(x_deep,y,'--','LineWidth',2);
phand(end+1) = loglog(x,y_generation,'--','LineWidth',2);

xlim([x(1),x(end)])
ylim([0.001,1])
grid on

lim_names = {'Shallow Limit = 0.05','Deep Limit = 0.5','Generation Limit = 0.65'};
legend(phand,[line_names,lim_names],'Location','northeast','interpreter','latex','fontsize',10,'AutoUpdate','off')
```



