import { BaseService } from '@gitbeaker/requester-utils';
import {
  BaseRequestOptions,
  PaginatedRequestOptions,
  RequestHelper,
  Sudo,
} from '../infrastructure';

export class Tags<C extends boolean> extends BaseService<C> {
  all(projectId: string | number, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get<C>(this, `projects/${pId}/repository/tags`, options);
  }

  create(projectId: string | number, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post<C>(this, `projects/${pId}/repository/tags`, options);
  }

  remove(projectId: string | number, tagName: string, options?: Sudo) {
    const [pId, tId] = [projectId, tagName].map(encodeURIComponent);

    return RequestHelper.del<C>(this, `projects/${pId}/repository/tags/${tId}`, options);
  }

  show(projectId: string | number, tagName: string, options?: Sudo) {
    const [pId, tId] = [projectId, tagName].map(encodeURIComponent);

    return RequestHelper.get<C>(this, `projects/${pId}/repository/tags/${tId}`, options);
  }
}
