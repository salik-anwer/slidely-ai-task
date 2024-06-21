import { Request, Response } from 'express';

interface Form {
  id: string;
  title: string;
  description: string;
  questions: string[];
}

interface Submission {
  formId: string;
  submissionId: string;
  responses: Array<{ question: string, answer: string }>;
}

const forms: Form[] = [];
const submissions: Submission[] = [];

export const createForm = (req: Request, res: Response) => {
  const { id, title, description, questions } = req.body;
  const newForm: Form = {
    id,
    title,
    description,
    questions
  };
  forms.push(newForm);
  console.log(forms);
  res.status(201).json(newForm);
};

export const getForms = (req: Request, res: Response) => {
  res.status(200).json(forms);
};

export const submitForm = (req: Request, res: Response) => {
  const { formId, submissionId, responses } = req.body;
  const newSubmission: Submission = { formId, submissionId, responses };
  submissions.push(newSubmission);
  console.log(submissions);
  res.status(201).json(newSubmission);
};

export const getSubmissions = (req: Request, res: Response) => {
  res.status(200).json(submissions);
};

export const getFormByID = (req: Request, res: Response) => {
  const formId = req.params.id;
    const form = forms.find(f => f.id === formId);
    if (form) {
        res.json(form);
    } else {
        res.status(404).send('Form not found');
    }
}
