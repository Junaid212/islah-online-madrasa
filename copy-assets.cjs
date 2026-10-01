const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\b160afad-180d-49bc-91ef-cc86ae653dbe';
const destDir = 'c:\\bright-media\\islah-online-madrasa\\public\\assets\\img';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(
  path.join(srcDir, 'quran_learning_card_1790836725194.jpg'),
  path.join(destDir, 'arc-quran.jpg')
);

fs.copyFileSync(
  path.join(srcDir, 'child_quran_student_1790836752566.jpg'),
  path.join(destDir, 'arc-child.jpg')
);

fs.copyFileSync(
  path.join(srcDir, 'islamic_arch_courtyard_1790836795615.jpg'),
  path.join(destDir, 'arc-courtyard.jpg')
);

console.log('Images copied successfully!');
