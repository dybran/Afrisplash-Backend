const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    _company: {
      type: mongoose.SchemaTypes.ObjectId,
      required: false,
      ref: 'company',
      default: null
    },
    _author: {
      type: mongoose.SchemaTypes.ObjectId,
      required: false,
      ref: 'user',
      default: null
    },
    title: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    industry: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    requirement: {
      type: String,
      required: true
    },
    benefit: {
      type: String,
      required: false
    },
    experience: {
      type: String,
      required: true,
      enum: ['Intermediate', 'Beginner', 'Senior', 'Junior', 'All'],
      default: 'All'
    },
    type: {
      type: String,
      enum: ['Remote', 'Onsite', 'Hybrid'],
      require: true,
      default: null
    },
    status: {
      type: String,
      enum: ['Active', 'Expired', 'Archived'],
      require: true,
      default: 'Active'
    },
    location: {
      type: String,
      required: true
    },
    salary: {
      type: Object,
      required: true,
      default: {
        amount: null,
        currency: null,
        period: null
      }
    },
    redirect: {
      type: Boolean,
      default: false,
      required: true
    },
    redirect_url: {
      type: String,
      default: null
    },
    verify: {
      type: Boolean,
      required: true,
      default: false
    },
    private: {
      type: Boolean,
      required: true,
      default: false
    },
    promoted: {
      type: Boolean,
      required: true,
      default: false
    },
    publish: {
      type: Boolean,
      required: true,
      default: true
    },
    expiry: {
      type: Date,
      required: true
    },
    external_data: {
      type: Object,
      required: false,
      default: {
        image: null,
        url: null,
        date: null
      }
    },
    applicants: [
      {
        _user: {
          type: mongoose.SchemaTypes.ObjectId,
          required: false,
          ref: 'user',
          default: null
        },
        date: String,
        rejected: Boolean,
        accepted: Boolean
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('job', jobSchema);
