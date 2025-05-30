# YOLOv8m Object Detection Showcase 🚀

A React-based showcase of YOLOv8m model performance on a custom dataset, achieving remarkable accuracy with minimal training data.

## 🎯 Project Highlights

- **High Accuracy**: Achieved 95.5% mAP@0.5 and F1 score
- **Efficient Training**: Only 600 custom images needed
- **Local Processing**: Trained on NVIDIA RTX 4060
- **Strong Performance**: Competitive results against larger datasets

## 📊 Model Performance

| Model                     | Dataset Size    | GPU                           | mAP@0.5 | F1 Score |
|--------------------------|-----------------|-------------------------------|----------|-----------|
| YOLOv8m (This Project)   | 600 images      | RTX 4060                     | 0.955    | 0.955     |
| YOLOv8m (Typical)        | ~10,000 images  | RTX 3090                     | 0.85-0.90 | 0.85-0.90 |
| YOLOv5m (Baseline)      | 2,000 images    | RTX 2080                     | 0.75     | 0.80      |


## 🚀 Getting Started

To explore the model predictions on your own images, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/NoiceHax/model-visualiser.git
   cd yolov8-object-detection-showcase
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm start
   ```

4. **Upload Your Images**: Navigate to the upload section and add your images.

5. **View Predictions**: See the model's predictions displayed with bounding boxes.

## 📚 Learn More

- **YOLOv8 Paper**: [Link to Paper](https://arxiv.org/abs/2207.02696)
- **React Documentation**: [React Docs](https://reactjs.org/docs/getting-started.html)
- **Create React App**: [Create React App Docs](https://create-react-app.dev/docs/getting-started/)

## 🛠️ Technologies Used

- **Frontend**: React, Tailwind CSS
- **Machine Learning**: PyTorch, YOLOv8

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a pull request


Made with ❤️ by Chandan (https://github.com/NoiceHax)
