figma.showUI(__html__);


// receive the message from ui
figma.ui.onmessage = (msg) => {

  // This is how figma responds back to the ui
  figma.ui.postMessage({
    type: 'create-rectangles',
    message: `Created ${msg.count} Rectangles`,
  });

  figma.closePlugin();
};
