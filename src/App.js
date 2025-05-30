// src/App.jsx
import React from 'react';

const trainingMetrics = {
  mAP: 0.955,
  F1: 0.955,
  epochs: 63,
  images: 600,
  hardware: 'NVIDIA RTX 4060',
  model: 'YOLOv8m',
  notes: 'Overfitting detected after 60 epochs — results stabilized afterward.',
};

const benchmarkData = [
  { model: 'YOLOv8m', dataset: 'COCO (80 classes)', mAP: '55-60%', notes: 'Large & challenging dataset' },
  { model: 'YOLOv8s', dataset: 'COCO', mAP: '50-55%', notes: 'Smaller model baseline' },
  { model: 'YOLOv8x', dataset: 'COCO', mAP: '60-65%', notes: 'Larger model, higher accuracy' },
];

const modelComparisons = [
  {
    model: 'YOLOv8m (Me)',
    datasetSize: '600 images',
    gpu: 'RTX 4060',
    mAP: '0.955',
    f1Score: '0.955',
    notes: 'Custom dataset, slight overfitting (~10%), very strong performance on a small dataset'
  },
  {
    model: 'YOLOv8m (Typical)',
    datasetSize: '~10,000 images',
    gpu: 'High-end GPUs (e.g. RTX 3090)',
    mAP: '~0.85 - 0.90',
    f1Score: '~0.85 - 0.90',
    notes: 'Usually trained on larger datasets for general object detection'
  },
  {
    model: 'YOLOv5m (Common baseline)',
    datasetSize: '~10,000 images',
    gpu: 'RTX 2080 Ti / RTX 3090',
    mAP: '~0.75 - 0.85',
    f1Score: '~0.75 - 0.85',
    notes: 'Earlier version, standard benchmarks'
  },
  {
    model: 'Faster R-CNN (General)',
    datasetSize: 'Larger datasets',
    gpu: 'RTX 2080 / 1080 Ti',
    mAP: '~0.70 - 0.80',
    f1Score: '~0.70 - 0.80',
    notes: 'Slower but precise two-stage detector'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900 text-white font-sans p-8">
      <header className="mb-12 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">YOLOv8m Object Detection  Custom Dataset Triumph 🚀</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Achieved an outstanding <span className="font-bold">mAP@0.5 of 95.5%</span> and F1 score of 0.955 on 600 custom images, trained locally on an NVIDIA RTX 4060.
        </p>
      </header>

      <section className="max-w-3xl mx-auto bg-white bg-opacity-20 rounded-lg p-6 shadow-lg mb-10">
        <h2 className="text-3xl font-bold mb-4">Model & Training Details</h2>
        <ul className="space-y-2 text-lg">
          <li><strong>Model:</strong> {trainingMetrics.model}</li>
          <li><strong>Dataset Size:</strong> {trainingMetrics.images} images (custom)</li>
          <li><strong>Epochs Trained:</strong> {trainingMetrics.epochs}</li>
          <li><strong>Hardware:</strong> {trainingMetrics.hardware}</li>
          <li><strong>Training Notes:</strong> {trainingMetrics.notes}</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto bg-white bg-opacity-20 rounded-lg p-6 shadow-lg mb-10">
        <h2 className="text-3xl font-bold mb-4">Training Performance Metrics</h2>
        <ul className="space-y-2 text-lg">
          <li><strong>mAP@0.5:</strong> {trainingMetrics.mAP}</li>
          <li><strong>F1 Score:</strong> {trainingMetrics.F1}</li>
          {/* Placeholder for training curves */}
          <li><strong>Confusion Matrix:</strong> Detailed visual available on request.</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto bg-white bg-opacity-20 rounded-lg p-6 shadow-lg mb-10 overflow-x-auto">
        <h2 className="text-3xl font-bold mb-6">Benchmark Comparison with Standard YOLOv8 on COCO</h2>
        <table className="min-w-full text-left border-collapse border border-white/30">
          <thead>
            <tr className="bg-white/20">
              <th className="border border-white/30 px-4 py-2">Model</th>
              <th className="border border-white/30 px-4 py-2">Dataset</th>
              <th className="border border-white/30 px-4 py-2">mAP@0.5</th>
              <th className="border border-white/30 px-4 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {benchmarkData.map(({model, dataset, mAP, notes}) => (
              <tr key={model} className="hover:bg-white/10">
                <td className="border border-white/30 px-4 py-2">{model}</td>
                <td className="border border-white/30 px-4 py-2">{dataset}</td>
                <td className="border border-white/30 px-4 py-2">{mAP}</td>
                <td className="border border-white/30 px-4 py-2">{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="max-w-4xl mx-auto bg-white bg-opacity-20 rounded-lg p-6 shadow-lg mb-10 overflow-x-auto">
        <h2 className="text-3xl font-bold mb-6">Model Comparisons</h2>
        <table className="min-w-full text-left border-collapse border border-white/30">
          <thead>
            <tr className="bg-white/20">
              <th className="border border-white/30 px-4 py-2">Model</th>
              <th className="border border-white/30 px-4 py-2">Dataset Size</th>
              <th className="border border-white/30 px-4 py-2">GPU</th>
              <th className="border border-white/30 px-4 py-2">mAP</th>
              <th className="border border-white/30 px-4 py-2">F1 Score</th>
              <th className="border border-white/30 px-4 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {modelComparisons.map(({model, datasetSize, gpu, mAP, f1Score, notes}) => (
              <tr key={model} className="hover:bg-white/10">
                <td className="border border-white/30 px-4 py-2">{model}</td>
                <td className="border border-white/30 px-4 py-2">{datasetSize}</td>
                <td className="border border-white/30 px-4 py-2">{gpu}</td>
                <td className="border border-white/30 px-4 py-2">{mAP}</td>
                <td className="border border-white/30 px-4 py-2">{f1Score}</td>
                <td className="border border-white/30 px-4 py-2">{notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="max-w-6xl mx-auto bg-white bg-opacity-20 rounded-lg p-6 shadow-lg mb-10">
        <h2 className="text-3xl font-bold mb-6">Training Visualizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-4 rounded-lg">
            <img 
              src="/confusion_matrix.png" 
              alt="Confusion Matrix" 
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <img 
              src="/confusion_matrix_normalized.png" 
              alt="Normalized Confusion Matrix" 
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <img 
              src="/f1_curve.png" 
              alt="F1 Curve" 
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <img 
              src="/P_curve.png" 
              alt="Precision Curve" 
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <img 
              src="/PR_curve.png" 
              alt="Precision-Recall Curve" 
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <img 
              src="/R_curve.png" 
              alt="Recall Curve" 
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <img 
              src="/val_batch0_labels.jpg" 
              alt="Validation Batch 0 Labels" 
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <img 
              src="/val_batch0_pred.jpg" 
              alt="Validation Batch 0 Predictions" 
              className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto text-center text-white/80">
        <p>Want to see the code or demo? Check out my <a href="https://github.com/NoiceHax" className="underline hover:text-white">GitHub</a> or connect with me on <a href="https://www.linkedin.com/in/chandan-p-11a432340/" className="underline hover:text-white">LinkedIn</a>.</p>
      </footer>
    </div>
  );
}

