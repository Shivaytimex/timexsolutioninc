#!/usr/bin/env node

/**
 * Video Thumbnail Generator
 * Extracts high-quality thumbnails from video files at random timestamps
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const VIDEO_DIR = path.join(__dirname, 'public/vedio');
const THUMBNAIL_DIR = path.join(__dirname, 'public/vedio/thumbnails');
const OUTPUT_SIZE = '1920x1080'; // HD quality
const QUALITY = 2; // 1-31, lower is better quality

// Video files to process
const videoFiles = [
  { input: 'video003.mp4', output: 'video003-thumb.jpg', poster: 'video003-poster.jpg' },
  { input: 'video004.mp4', output: 'video004-thumb.jpg', poster: 'video004-poster.jpg' },
  { input: 'video005.mp4', output: 'video005-thumb.jpg', poster: 'video005-poster.jpg' },
  { input: 'video006.mp4', output: 'video006-thumb.jpg', poster: 'video006-poster.jpg' },
  { input: 'video007.mp4', output: 'video007-thumb.jpg', poster: 'video007-poster.jpg' },
  { input: 'video008.mp4', output: 'video008-thumb.jpg', poster: 'video008-poster.jpg' },
  { input: 'video009.mp4', output: 'video009-thumb.jpg', poster: 'video009-poster.jpg' },
];

const videoForHomeFiles = [
  { input: 'videoForHome/1.mp4', output: 'videoForHome/1-thumb.jpg', poster: 'videoForHome/1-poster.jpg' },
  { input: 'videoForHome/2.mp4', output: 'videoForHome/2-thumb.jpg', poster: 'videoForHome/2-poster.jpg' },
  { input: 'videoForHome/3.mp4', output: 'videoForHome/3-thumb.jpg', poster: 'videoForHome/3-poster.jpg' },
  { input: 'videoForHome/4.mp4', output: 'videoForHome/4-thumb.jpg', poster: 'videoForHome/4-poster.jpg' },
  { input: 'videoForHome/5.mp4', output: 'videoForHome/5-thumb.jpg', poster: 'videoForHome/5-poster.jpg' },
  { input: 'videoForHome/6.mp4', output: 'videoForHome/6-thumb.jpg', poster: 'videoForHome/6-poster.jpg' },
  { input: 'videoForHome/7.mp4', output: 'videoForHome/7-thumb.jpg', poster: 'videoForHome/7-poster.jpg' },
  { input: 'videoForHome/8.mp4', output: 'videoForHome/8-thumb.jpg', poster: 'videoForHome/8-poster.jpg' },
  { input: 'videoForHome/9.mp4', output: 'videoForHome/9-thumb.jpg', poster: 'videoForHome/9-poster.jpg' },
  { input: 'videoForHome/10.mp4', output: 'videoForHome/10-thumb.jpg', poster: 'videoForHome/10-poster.jpg' },
  { input: 'videoForHome/12.mp4', output: 'videoForHome/12-thumb.jpg', poster: 'videoForHome/12-poster.jpg' },
  { input: 'videoForHome/13.mp4', output: 'videoForHome/13-thumb.jpg', poster: 'videoForHome/13-poster.jpg' },
  { input: 'videoForHome/14.mp4', output: 'videoForHome/14-thumb.jpg', poster: 'videoForHome/14-poster.jpg' },
  { input: 'videoForHome/15.mp4', output: 'videoForHome/15-thumb.jpg', poster: 'videoForHome/15-poster.jpg' },
  { input: 'videoForHome/16.mp4', output: 'videoForHome/16-thumb.jpg', poster: 'videoForHome/16-poster.jpg' },
  { input: 'videoForHome/17.mp4', output: 'videoForHome/17-thumb.jpg', poster: 'videoForHome/17-poster.jpg' },
  { input: 'videoForHome/18.mp4', output: 'videoForHome/18-thumb.jpg', poster: 'videoForHome/18-poster.jpg' },
  { input: 'videoForHome/21.mp4', output: 'videoForHome/21-thumb.jpg', poster: 'videoForHome/21-poster.jpg' },
  { input: 'videoForHome/22.mp4', output: 'videoForHome/22-thumb.jpg', poster: 'videoForHome/22-poster.jpg' },
  { input: 'videoForHome/24.mp4', output: 'videoForHome/24-thumb.jpg', poster: 'videoForHome/24-poster.jpg' },
];

// Create thumbnail directories
function createDirectories() {
  const dirs = [
    THUMBNAIL_DIR,
    path.join(THUMBNAIL_DIR, 'videoForHome')
  ];
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
  });
}

// Get random timestamp between 20% and 80% of video duration
function getRandomTimestamp(duration) {
  const start = duration * 0.2; // Skip first 20%
  const end = duration * 0.8;   // Skip last 20%
  const random = start + Math.random() * (end - start);
  return Math.floor(random);
}

// Get video duration
function getVideoDuration(videoPath) {
  return new Promise((resolve, reject) => {
    const cmd = `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${videoPath}"`;
    
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(parseFloat(stdout));
    });
  });
}

// Extract thumbnail from video
function extractThumbnail(inputPath, outputPath, timestamp) {
  return new Promise((resolve, reject) => {
    const cmd = `ffmpeg -y -ss ${timestamp} -i "${inputPath}" -vframes 1 -q:v ${QUALITY} -s ${OUTPUT_SIZE} "${outputPath}"`;
    
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
}

// Process a single video
async function processVideo(video) {
  try {
    const inputPath = path.join(VIDEO_DIR, video.input);
    const thumbPath = path.join(THUMBNAIL_DIR, video.output);
    const posterPath = path.join(THUMBNAIL_DIR, video.poster);
    
    // Check if video exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Video not found: ${video.input}`);
      return;
    }
    
    // Get video duration
    const duration = await getVideoDuration(inputPath);
    
    // Generate two different timestamps for thumb and poster
    const thumbTimestamp = getRandomTimestamp(duration);
    const posterTimestamp = getRandomTimestamp(duration);
    
    // Extract thumbnails
    console.log(`🎬 Processing: ${video.input}`);
    console.log(`   Duration: ${duration.toFixed(2)}s`);
    console.log(`   Thumbnail at: ${thumbTimestamp}s`);
    console.log(`   Poster at: ${posterTimestamp}s`);
    
    await extractThumbnail(inputPath, thumbPath, thumbTimestamp);
    console.log(`   ✅ Created: ${video.output}`);
    
    await extractThumbnail(inputPath, posterPath, posterTimestamp);
    console.log(`   ✅ Created: ${video.poster}`);
    
  } catch (error) {
    console.error(`❌ Error processing ${video.input}:`, error.message);
  }
}

// Main function
async function main() {
  console.log('🚀 Starting thumbnail generation...\n');
  
  // Check if ffmpeg is installed
  exec('ffmpeg -version', (error) => {
    if (error) {
      console.error('❌ FFmpeg is not installed. Please install it first:');
      console.error('   Ubuntu/Debian: sudo apt install ffmpeg');
      console.error('   Mac: brew install ffmpeg');
      console.error('   Windows: Download from https://ffmpeg.org/');
      process.exit(1);
    }
  });
  
  // Create directories
  createDirectories();
  
  console.log('\n📹 Processing main videos...\n');
  for (const video of videoFiles) {
    await processVideo(video);
  }
  
  console.log('\n📹 Processing videoForHome...\n');
  for (const video of videoForHomeFiles) {
    await processVideo(video);
  }
  
  console.log('\n🎉 Thumbnail generation completed!');
  console.log(`📁 Thumbnails saved to: ${THUMBNAIL_DIR}`);
}

// Run the script
main().catch(console.error);

